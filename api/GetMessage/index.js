module.exports = async function (context, req) {
  const date = "2023-05-02T11:07:08.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

