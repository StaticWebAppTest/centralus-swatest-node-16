module.exports = async function (context, req) {
  const date = "2022-12-28T15:09:25.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

