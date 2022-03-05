module.exports = async function (context, req) {
  const date = "2022-03-05T18:11:06.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

