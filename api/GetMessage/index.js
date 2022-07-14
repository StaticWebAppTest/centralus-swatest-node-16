module.exports = async function (context, req) {
  const date = "2022-07-14T08:14:27.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

