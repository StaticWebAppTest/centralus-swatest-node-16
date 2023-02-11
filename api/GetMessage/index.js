module.exports = async function (context, req) {
  const date = "2023-02-11T18:11:08.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

