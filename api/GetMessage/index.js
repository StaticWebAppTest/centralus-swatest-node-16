module.exports = async function (context, req) {
  const date = "2023-12-15T09:09:40.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

