module.exports = async function (context, req) {
  const date = "2023-04-10T12:16:21.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

