module.exports = async function (context, req) {
  const date = "2022-03-15T04:13:19.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

