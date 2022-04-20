module.exports = async function (context, req) {
  const date = "2022-04-20T14:10:23.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

