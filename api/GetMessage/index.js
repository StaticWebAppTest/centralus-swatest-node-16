module.exports = async function (context, req) {
  const date = "2023-10-25T13:11:04.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

