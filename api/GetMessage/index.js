module.exports = async function (context, req) {
  const date = "2022-08-28T18:13:21.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

