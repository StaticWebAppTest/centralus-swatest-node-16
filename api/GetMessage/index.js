module.exports = async function (context, req) {
  const date = "2022-03-02T14:09:40.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

