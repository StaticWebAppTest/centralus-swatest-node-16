module.exports = async function (context, req) {
  const date = "2022-02-28T18:11:45.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

