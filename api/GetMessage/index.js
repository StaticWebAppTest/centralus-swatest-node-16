module.exports = async function (context, req) {
  const date = "2022-10-15T18:15:01.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

