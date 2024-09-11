module.exports = async function (context, req) {
  const date = "2024-09-11T09:12:08.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

