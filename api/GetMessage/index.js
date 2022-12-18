module.exports = async function (context, req) {
  const date = "2022-12-18T11:07:08.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

