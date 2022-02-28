module.exports = async function (context, req) {
  const date = "2022-02-28T03:10:40.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

