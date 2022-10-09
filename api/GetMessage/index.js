module.exports = async function (context, req) {
  const date = "2022-10-09T09:14:25.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

