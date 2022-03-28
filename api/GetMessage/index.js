module.exports = async function (context, req) {
  const date = "2022-03-28T23:10:03.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

