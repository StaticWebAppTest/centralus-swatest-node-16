module.exports = async function (context, req) {
  const date = "2022-08-12T18:13:17.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

