module.exports = async function (context, req) {
  const date = "2023-02-27T14:09:50.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

