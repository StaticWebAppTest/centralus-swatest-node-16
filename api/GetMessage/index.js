module.exports = async function (context, req) {
  const date = "2023-03-03T18:13:02.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

