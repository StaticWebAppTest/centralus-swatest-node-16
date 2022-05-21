module.exports = async function (context, req) {
  const date = "2022-05-21T07:10:23.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

