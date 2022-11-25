module.exports = async function (context, req) {
  const date = "2022-11-25T18:13:11.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

