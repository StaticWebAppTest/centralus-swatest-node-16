module.exports = async function (context, req) {
  const date = "2022-11-18T14:10:55.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

