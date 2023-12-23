module.exports = async function (context, req) {
  const date = "2023-12-23T10:08:42.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

