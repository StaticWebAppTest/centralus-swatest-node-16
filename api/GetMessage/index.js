module.exports = async function (context, req) {
  const date = "2023-02-25T18:11:36.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

