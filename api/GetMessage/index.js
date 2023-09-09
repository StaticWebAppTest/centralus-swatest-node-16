module.exports = async function (context, req) {
  const date = "2023-09-09T22:07:15.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

