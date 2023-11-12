module.exports = async function (context, req) {
  const date = "2023-11-12T02:21:27.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

