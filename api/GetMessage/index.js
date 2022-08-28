module.exports = async function (context, req) {
  const date = "2022-08-28T03:52:08.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

