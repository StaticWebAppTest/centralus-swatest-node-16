module.exports = async function (context, req) {
  const date = "2023-05-04T11:08:03.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

