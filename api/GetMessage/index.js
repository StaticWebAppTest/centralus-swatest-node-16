module.exports = async function (context, req) {
  const date = "2022-10-27T18:17:15.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

