module.exports = async function (context, req) {
  const date = "2022-11-18T15:11:06.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

