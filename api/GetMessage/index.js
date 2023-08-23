module.exports = async function (context, req) {
  const date = "2023-08-23T21:07:37.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

