module.exports = async function (context, req) {
  const date = "2023-11-12T17:07:19.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

