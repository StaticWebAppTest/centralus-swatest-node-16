module.exports = async function (context, req) {
  const date = "2022-02-25T11:08:04.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

