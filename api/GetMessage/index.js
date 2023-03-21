module.exports = async function (context, req) {
  const date = "2023-03-21T09:09:40.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

