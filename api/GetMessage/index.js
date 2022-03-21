module.exports = async function (context, req) {
  const date = "2022-03-21T13:18:18.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

