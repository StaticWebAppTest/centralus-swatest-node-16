module.exports = async function (context, req) {
  const date = "2022-10-07T18:20:56.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

