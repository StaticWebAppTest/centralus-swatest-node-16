module.exports = async function (context, req) {
  const date = "2022-08-08T19:09:10.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

