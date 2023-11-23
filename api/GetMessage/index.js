module.exports = async function (context, req) {
  const date = "2023-11-23T09:09:20.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

