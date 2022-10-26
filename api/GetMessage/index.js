module.exports = async function (context, req) {
  const date = "2022-10-26T18:15:08.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

