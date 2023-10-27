module.exports = async function (context, req) {
  const date = "2023-10-27T17:06:19.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

