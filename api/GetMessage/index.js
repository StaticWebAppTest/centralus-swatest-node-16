module.exports = async function (context, req) {
  const date = "2022-06-23T18:13:35.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

