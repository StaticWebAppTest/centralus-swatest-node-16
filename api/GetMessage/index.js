module.exports = async function (context, req) {
  const date = "2022-07-25T13:35:03.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

