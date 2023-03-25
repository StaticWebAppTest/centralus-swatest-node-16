module.exports = async function (context, req) {
  const date = "2023-03-25T08:11:02.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

