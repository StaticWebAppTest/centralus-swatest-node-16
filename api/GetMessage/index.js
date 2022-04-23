module.exports = async function (context, req) {
  const date = "2022-04-23T10:11:33.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

