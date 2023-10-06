module.exports = async function (context, req) {
  const date = "2023-10-06T12:17:27.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

