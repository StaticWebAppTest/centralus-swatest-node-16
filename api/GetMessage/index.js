module.exports = async function (context, req) {
  const date = "2023-11-12T06:11:08.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

