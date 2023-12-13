module.exports = async function (context, req) {
  const date = "2023-12-13T16:11:24.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

