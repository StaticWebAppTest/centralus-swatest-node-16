module.exports = async function (context, req) {
  const date = "2023-08-25T08:11:03.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

