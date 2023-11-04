module.exports = async function (context, req) {
  const date = "2023-11-04T05:08:04.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

