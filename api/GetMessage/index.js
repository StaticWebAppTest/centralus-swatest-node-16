module.exports = async function (context, req) {
  const date = "2022-12-06T18:12:19.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

