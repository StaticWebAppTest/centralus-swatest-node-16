module.exports = async function (context, req) {
  const date = "2023-07-16T09:08:52.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

